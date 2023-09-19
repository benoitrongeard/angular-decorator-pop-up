import { PopUpConfirmationComponent } from "../components/pop-up-confirmation/pop-up-confirmation.component";
import { ConfirmPopUpData } from "../interfaces/confirm-pop-up-data";
import { PopUpService } from "../services/pop-up.service";

const defaultConfirmPopUpData: ConfirmPopUpData = {
    title: 'Confirmation',
    message: 'Are you sure to do this action ?'
};

export function confirmationPopUp(confirmData: ConfirmPopUpData) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            PopUpService.getInstance()?.openDialog(PopUpConfirmationComponent, confirmData, '200px').subscribe((validation) => {
                if (validation) {
                    originalMethod.apply(this, args);
                }
            });
        }

        return descriptor;
    };
}