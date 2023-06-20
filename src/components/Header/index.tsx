import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={coffeeLogoImg} alt="" />
                <HeaderButtonContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Belford Roxo, RJ
                    </HeaderButton>

                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}