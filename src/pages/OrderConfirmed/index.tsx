import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDatailsContainer } from "./styles";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
    const { colors } = useTheme();

    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">
                    Uhu! Pedido Confirmado
                </TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que logo o café chegará até você
                </RegularText>
            </div>

            <section>
                <OrderDatailsContainer>
                    <InfoWithIcon 
                        icon={<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Entrega em <strong>Rua Barbacena, 18</strong>
                                <br />
                                Areia Branca - Belford Roxo - RJ
                            </RegularText>
                        }
                    />

                    <InfoWithIcon 
                        icon={<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                               Previsão de entrega
                                <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon 
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow-dark"]}
                        text={
                            <RegularText>
                                Pagamento na entrega
                                <br />
                                <strong>Dinheiro</strong>
                            </RegularText>
                        }
                    />
                </OrderDatailsContainer>

                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </OrderConfirmedContainer>
    );
}