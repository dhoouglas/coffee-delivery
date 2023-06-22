import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1688342400&Signature=d7q0vnnMDmtDMgOsuOZm0jiWML4zb9YzHeHKh7GQeAtXfLeVaP5DZTzAJy1PwWssAHY~IZ6FtQ6z0IDYHQckTF8koWbkLPykA-1R3gLK7YJVKWxNJ2thEof0tc-oILNO8D5aGC5KVwgy6bgNshM5A-Is1sx0c9hhvehfaWIrRP-SiPwBn51anmPW2WPq9VIbgGhvAZiFxlcO1tdC~hFMohd79WG1KiBPmCwjikfqxa2whaqw6nNEbvdbxNYU9y-ssw8OgYI9yo8Nn2aXd8g1MBULpg9t8kG~Suj4wXDW6fSJNM2QUd6b3ONhtkPA9t2SSxgknsFttLPFD-L7dmrEPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

                <div>
                    <RegularText color="subtitle">
                        Expresso Tradicional
                    </RegularText>

                    <ActionsContainer>
                        <QuantityInput size="small" />

                        <RemoveButton>
                            <Trash size={16} />
                            REMOVER    
                        </RemoveButton>    
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ 9,90</p>    
        </CoffeeCartCardContainer>
    );
}