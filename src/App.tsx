import { ReactElement, useState } from 'react';
import './app.scss';
import ShippingPage from './pages/ShippingPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import ReviewPage from './pages/ReviewPage';
import CompletePage from './pages/CompletePage';
import HeaderComponent from './components/HeaderComponent';
import ProgressComponent from './components/ProgressComponent';
import NavButtonsComponent from './components/NavButtonsComponent/NavButtonsComponent';

const App = (): ReactElement => {
    const [pageNumber, setPageNumber] = useState(0);
    const [count, setCount] = useState(0);
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
    });
    const [paymentInfo, setPaymentInfo] = useState({
        cardType: '',
        cardNumber: '',
        securityCode: '',
    });
    return (
        <>
            <HeaderComponent />
            <div className="flex-wrapper">
                <div className="page-wrapper">
                    <div className="progress-wrapper">
                        <ProgressComponent
                            pageNumber={pageNumber}
                            setPageNumber={setPageNumber}
                        />
                    </div>
                    <div className="page-type-wrapper">
                        {pageNumber === 0 && (
                            <CartPage
                                count={count}
                                setCount={setCount}
                                setPageNumber={setPageNumber}
                            />
                        )}

                        {pageNumber === 1 && (
                            <ShippingPage
                                setPageNumber={setPageNumber}
                                shippingInfo={shippingInfo}
                                setShippingInfo={setShippingInfo}
                            />
                        )}

                        {pageNumber === 2 && (
                            <PaymentPage
                                setPageNumber={setPageNumber}
                                paymentInfo={paymentInfo}
                                setPaymentInfo={setPaymentInfo}
                            />
                        )}
                    </div>
                    {pageNumber === 3 && (
                        <ReviewPage shippingInfo paymentInfo />
                    )}
                    {pageNumber === 4 && <CompletePage />}
                    <div className="nav-button-wrapper">
                        <NavButtonsComponent
                            pageNumber={pageNumber}
                            setPageNumber={setPageNumber}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
