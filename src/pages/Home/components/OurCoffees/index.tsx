import { Titletext } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffeesContainer className="container">
            <Titletext size="l" color="subtitle">
                Nossos Cafés
            </Titletext>

            <CoffeeList>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeeList>
        </OurCoffeesContainer>
    );
}