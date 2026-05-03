// "use client"
// import React from 'react'
// import {Button} from "@/components/ui/button";
// import {Input} from "@/components/ui/input";
// import Navbar from '@/components/Navbar';
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger, }from "@/components/ui/dialog";
// import { useState } from 'react';
// import {
//   Field,
//   FieldContent,
//   FieldDescription,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
//   FieldLegend,
//   FieldSeparator,
//   FieldSet,
//   FieldTitle,
// } from "@/components/ui/field"
// import { Label } from "@/components/ui/label";

// export default function products() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [product, setproduct] = useState({ id: crypto.randomUUID,name: "", price:0, photo: ""});

  
//   const [products, setproducts] = useState([]);
//   const handlesumit = () =>{
//     if (!product.name || !product.price || !product.photo)return;
//     setproducts((prev) => [...prev,product]);
//     setIsOpen(false);
//   };
//   console.log(products);
//   return( 
//   <div className = "w-5xl mx-auto text-center space-y-5">
//       <Navbar/>
//       <Button onClick ={()=>setIsOpen((prev) => !prev)}>Create Product</Button>

//         <Dialog open = {isOpen} onOpenChange={()=>setIsOpen((prev)=>!prev)}>
//         <DialogTrigger>Open</DialogTrigger>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Are you absolutely sure?</DialogTitle>
//             <DialogDescription>
//               This action cannot be undone. This will permanently delete your account
//               and remove your data from our servers.
//             </DialogDescription>
//           </DialogHeader>
//         <form>
//         <DialogTrigger asChild>
//           <Button variant="outline">Open Dialog</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-sm">
//           <DialogHeader>
//             <DialogTitle>Create Product</DialogTitle> 
//             <DialogDescription>
//               Make changes to your profile here. Click save when you&apos;re
//               done.
//             </DialogDescription>
//           </DialogHeader>
//           <FieldGroup>
//             <Field>
//               <Label htmlFor="name-1">Name</Label>
//               <Input 
//               id="name-1" 
//               name="name" 
//               defaultValue={product.name} 
//               placeholder=''
//                />
//             </Field>
//             <Field>
//               <Label htmlFor="price-1">price</Label>
//               <Input id="price-1" name="price-1" defaultValue={product.price} />
//             </Field>
//             <Field>
//               <Label htmlFor="photo-1">photo</Label>
//               <Input id="photo-1" name="photo-1" defaultValue={product.photo} />
//             </Field>
//           </FieldGroup>
//           <DialogFooter>    
//             <DialogClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DialogClose>
//             <Button type="submit" onClick={handlesumit}>Create</Button>
//           </DialogFooter>
//         </DialogContent>
//       </form>
//         </DialogContent>
//       </Dialog>
//       <div className="grid grid-cols-3 gap-4">
        
//         </div>
//         {products.map((product, index) => (
//           <div className='flex flex-col border border-gray-500'>
//           <img 
//           src={product.photo}
//           alt={product.name} />
//         <div className=''>
//         <div>
//             <h3 className='font-semibold text-xl text-blue-500'></h3>
//             <p className='text-left'></p> 
//           </div>
            
        
//           <Button>Add to cart</Button>
//           </div>
//           </div>
//           ))}
//       </div>   
//   );
// };
// //<p key={index}>{`${product.name}${product.price}`}</p>
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from '@/components/Navbar';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [product, setProduct] = useState({
    id: crypto.randomUUID(),
    name: "",
    price: 0,
    photo: ""
  });

  const [products, setProducts] = useState<Array<{id: string; name: string; price: number; photo: string}>>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!product.name || !product.price || !product.photo) {
      alert("Please fill all fields!");
      return;
    }

    setProducts((prev) => [...prev, { ...product }]);
    setIsOpen(false);
    
    // Reset form
    setProduct({
      id: crypto.randomUUID(),
      name: "",
      price: 0,
      photo: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) || 0 : value
    }));
  };

  return (
    <div className="max-w-5xl mx-auto text-center space-y-5 p-4">
      <Navbar />
      
      <Button onClick={() => setIsOpen(true)}>
        Create Product
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
            <DialogDescription>
              Add a new product to your store.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                placeholder="0"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                id="photo"
                name="photo"
                value={product.photo}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Create Product</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <img
              src={p.photo}
              alt={p.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=No+Image";
              }}
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl text-blue-600">{p.name}</h3>
              <p className="text-2xl font-bold text-green-600 mt-2">
                ${p.price}
              </p>
              <Button className="w-full mt-4">Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-gray-500 text-lg">No products yet. Create one above!</p>
      )}
    </div>
  );
}
