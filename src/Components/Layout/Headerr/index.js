import Header from '~/Components/Layout/components/Header';

function Headerr({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default Headerr;
