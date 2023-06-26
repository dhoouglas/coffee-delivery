import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP").max(8),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>( {
        resolver: zodResolver(confirmOrderFormValidationSchema)
    });

    const { handleSubmit } = confirmOrderForm;

    const navigate = useNavigate();

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
            state: data,
        })
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm />

                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    )
}