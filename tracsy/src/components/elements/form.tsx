interface signform {
    title: string;
  }
  
  export function Form({ title }: signform) {
    return (
      <div className="pb-10 min-h-[128px]">
              <h1 className="font-bold text-6">{title}</h1>
      </div>
    ); // inserir inputs
  }