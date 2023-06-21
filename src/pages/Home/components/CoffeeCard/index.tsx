import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1688342400&Signature=d7q0vnnMDmtDMgOsuOZm0jiWML4zb9YzHeHKh7GQeAtXfLeVaP5DZTzAJy1PwWssAHY~IZ6FtQ6z0IDYHQckTF8koWbkLPykA-1R3gLK7YJVKWxNJ2thEof0tc-oILNO8D5aGC5KVwgy6bgNshM5A-Is1sx0c9hhvehfaWIrRP-SiPwBn51anmPW2WPq9VIbgGhvAZiFxlcO1tdC~hFMohd79WG1KiBPmCwjikfqxa2whaqw6nNEbvdbxNYU9y-ssw8OgYI9yo8Nn2aXd8g1MBULpg9t8kG~Suj4wXDW6fSJNM2QUd6b3ONhtkPA9t2SSxgknsFttLPFD-L7dmrEPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

            <Tags>
                <span>Tradicional</span>
                <span>Com Leite</span>
            </Tags>

            <Name>Expresso Tradicional</Name>

            <Description>
                O tradicional café feito com água quente e grãos moídos
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">
                        90,00    
                    </TitleText>    
                </div> 

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>

        </CoffeeCardContainer>

        
    )
}