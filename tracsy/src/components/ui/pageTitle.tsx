interface PageTitleProps {
    title: string;
  }
  
  export function PageTitle({ title }: PageTitleProps) {
    return (
      <h1 className="text-center p-5 font-bold text-[25px]">
        {title}
      </h1>
    );
  }
  