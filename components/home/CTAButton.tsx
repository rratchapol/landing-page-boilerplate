import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <div className="flex gap-4">
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer nofollow">
        <Button
          variant="default"
          className="flex items-center gap-2 bg-blue-400 hover:bg-blue-600 text-white"
          aria-label="Second Button">
          Facebook
        </Button>
      </Link>

      <Link
        href="https://github.com/weijunext/landing-page-boilerplate"
        target="_blank"
        rel="noopener noreferrer nofollow">
        <Button
          variant="default"
          className="flex items-center gap-2 bg-green-400 hover:bg-green-600 text-white"
          aria-label="Line">
          Line
        </Button>
      </Link>

      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer nofollow">
        <Button
          variant="default"
          className="flex items-center gap-2 bg-red-400 hover:bg-red-600 text-white"
          aria-label="Second Button">
          Youtube
        </Button>
      </Link>
    </div>
  );
};

export default CTAButton;
