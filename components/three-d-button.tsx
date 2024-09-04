import Link, { LinkProps } from "next/link";

type ThreeDButtonBaseProps = {
  children: React.ReactNode;
  bgStyles?: string;
  btnStyles?: string;
  target?: "_blank";
};

type ThreeDButtonLinkProps = ThreeDButtonBaseProps & {
  type: "link";
  href: string;
  onClick?: () => void;
};

type ThreeDButtonButtonProps = ThreeDButtonBaseProps & {
  type: "button";
  onClick: () => void;
  href?: string;
};

type ThreeDButtonProps = ThreeDButtonLinkProps | ThreeDButtonButtonProps;

export default function ThreeDButton({
  type,
  href,
  onClick,
  children,
  bgStyles,
  btnStyles,
  target,
}: ThreeDButtonProps) {
  if (type === "link" && href) {
    return (
      <Link
        href={href}
        className={`${bgStyles} bg-black z-0 group`}
        target={target && target}
      >
        <div
          className={`${btnStyles} p-4 border bg-white 
         border-black  transition-all z-10 group-hover:translate-x-2 group-hover:-translate-y-2`}
        >
          {children}
        </div>
      </Link>
    );
  }
  if (type === "button" && onClick) {
    return (
      <button onClick={onClick} className={`${bgStyles} bg-black z-0 group`}>
        <div
          className={`${btnStyles} p-4 border  
         border-black  transition-all z-10 group-hover:translate-x-2 group-hover:-translate-y-2`}
        >
          {children}
        </div>
      </button>
    );
  }

  throw new Error("Invalid props combination for ThreeDButton");
}
