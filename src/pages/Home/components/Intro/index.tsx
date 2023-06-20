import { BenfitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from "../../../../assets/intro-img.png";
import { Regulartext } from "../../../../components/Typography";

export function Intro() {
    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>

                        <Regulartext size="l" color="subtitle" as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </Regulartext>
                    </section>

                    <BenfitsContainer>

                        
                    </BenfitsContainer>
                </div>

                <img src={introImg} alt="" />
            </IntroContent>
        </IntroContainer>
    )
}