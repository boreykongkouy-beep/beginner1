"use client"
import React from 'react'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger, }from "@/components/ui/dialog";
import { useState } from 'react';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label";

export default function products() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setproduct] = useState({ id: crypto.randomUUID,name: "", price:0, photo: ""});

  
  const [products, setproducts] = useState([]);
  const handlesumit = () =>{
    if (!product.name || !product.price || !product.photo)return;
    setproducts((pre) => [...pre,product]);
    setIsOpen(false);
  };
  console.log(products);
  return( 
  <div className = "w-5xl mx-auto text-center space-y-5">
      <Navbar/>
      <Button onClick ={()=>setIsOpen((prev) => !prev)}>Create Product</Button>

        <Dialog open = {isOpen} onOpenChange={()=>setIsOpen((prev)=>!prev)}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle> 
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input 
              id="name-1" 
              name="name" 
              defaultValue={product.name} 
              placeholder=''
               />
            </Field>
            <Field>
              <Label htmlFor="price-1">price</Label>
              <Input id="price-1" name="price-1" defaultValue={product.price} />
            </Field>
            <Field>
              <Label htmlFor="photo-1">photo</Label>
              <Input id="photo-1" name="photo-1" defaultValue={product.photo} />
            </Field>
          </FieldGroup>
          <DialogFooter>    
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handlesumit}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </form>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-3 gap-4">
        
        </div>
        {products.map((product, index) => (
          <div className='flex flex-col border border-gray-500'>
          <img 
          src={product.photo}
          alt={product.name} />
        <div className=''>
        <div>
            <h3 className='font-semibold text-xl text-blue-500'></h3>
            <p className='text-left'></p> 
          </div>
            
        
          <Button>Add to cart</Button>
          </div>
          </div>
          ))}
      </div>   
  );
};
//<p key={index}>{`${product.name}${product.price}`}</p>
