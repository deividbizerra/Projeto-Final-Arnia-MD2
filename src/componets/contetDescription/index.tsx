import { BoxContet, H1 } from "./style";

type Props = {
  description: string;
  text?: string;
  
};

export const ContDescription = ({ description, text }: Props) => {
  return (
    <BoxContet>
      <H1>
        {description} 
      </H1><span> {text }</span>
    </BoxContet>
  );
};
