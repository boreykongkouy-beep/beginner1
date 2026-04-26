import { Github } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 border-b">
      <h1>NextStarter</h1>

      <div className="flex items-center gap-4">
        <Link href = "/features">Feature</Link>
        <Link href = "/products">Product</Link>
        <a href="/Features" >Features</a>
        {/* <a href="#">Get Started</a> */}
        <Button variant="outline">
          <Github /> GitHub
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
//target ="_blank"