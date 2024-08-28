import Lottie, { LottieOptions } from 'lottie-react';
import Shipping from './illustrations/shipping-lottie.json'
import FlexiblePayment from './illustrations/flexible-payment-lottie.json'

interface IllustrationsProps {
    className?: string;
    style?: React.CSSProperties;
    lottieOptions?: LottieOptions;
}

export const Illustrations = {
    shipping: (props: IllustrationsProps) => <Lottie {...props} animationData={Shipping} />,
    flexiblePayment: (props: IllustrationsProps) => <Lottie {...props} animationData={FlexiblePayment} />,
}
