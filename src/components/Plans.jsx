const Plans = () => {
    const onClick = () => {
        alert('Redirecting to proper form...');
    }
    return (
        <section className="flex flex-col items-center md:hidden p-6 align-middle">
            <h2 className="text-right mr-24 font-bold font-poppins text-2xl text-4">
                Affordable plans to <span className="text-5">Custom fit you</span>
            </h2>
            <p className="my-4 ml-20 font-poppins text-2xs text-6">
                Comprehensive guides, expert advice, and simple tips to save on healthcare costs without sacrificing quality. Trust Insurezella to help you reduce
                your expenses confidently.
            </p>
            <div className="flex flex-col items-center w-2/3">
                <article className="flex flex-col items-center mb-4 w-4/5">
                    <img src="/assets/comprehensive-coverage.webp" alt="People discussing with some documents on a table" className="w-full object-cover" />
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <div className="flex flex-col items-center bg-11 m-2 -mt-2.5 px-1.5 py-2 rounded font-poppins font-semibold text-2">
                                <span className="text-xs">15</span>
                                <span className="text-1xs">Oct</span>
                            </div>
                            <h3 className="font-bold font-poppins text-1xs text-4">Reduced Out-of-Pocket Expenses</h3>
                        </div>
                        <p className="ml-1.5 font-poppins text-2xs text-6 text-left">Comprehensive guides, expert advice, and simple tips to save on healthcare costs without sacrificing quality</p>
                        <button className="bg-2 mt-1.5 ml-1.5 rounded-md font-bold font-poppins text-1 text-1xs text-left hover:text-25" onClick={onClick}>GET A QUOTE</button>
                    </div>
                </article>
                <article className="flex flex-col items-center mb-4 w-4/5">
                    <img src="/assets/comprehensive-coverage.webp" alt="People discussing with some documents on a table" className="w-full" />
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <div className="flex flex-col items-center bg-5 m-2 -mt-2.5 px-1.5 py-2 rounded font-poppins font-semibold text-2">
                                <span className="text-xs">20</span>
                                <span className="text-1xs">Oct</span>
                            </div>
                            <h3 className="mr-2 font-bold font-poppins text-1xs text-4">Comprehensive Coverage Options</h3>
                        </div>
                        <p className="ml-1.5 font-poppins text-2xs text-6 text-left">Comprehensive guides, expert advice, and simple tips to save on healthcare costs without sacrificing quality</p>
                        <button className="bg-2 mt-1.5 ml-1.5 rounded-md font-bold font-poppins text-1 text-1xs text-left hover:text-25" onClick={onClick}>GET A QUOTE</button>
                    </div>
                </article>
                <article className="flex flex-col items-center mb-4 w-4/5">
                    <img src="/assets/comprehensive-coverage.webp" alt="People discussing with some documents on a table" className="w-full" />
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <div className="flex flex-col items-center bg-12 m-2 -mt-2.5 px-1.5 py-2 rounded font-poppins font-semibold text-2">
                                <span className="text-xs">22</span>
                                <span className="text-1xs">Oct</span>
                            </div>
                            <h3 className="font-bold font-poppins text-1xs text-4">Keep your family covered</h3>
                        </div>
                        <p className="ml-1.5 font-poppins text-2xs text-6 text-left">Comprehensive guides, expert advice, and simple tips to save on healthcare costs without sacrificing quality</p>
                        <button className="bg-2 mt-1.5 ml-1.5 rounded-md font-bold font-poppins text-1 text-1xs text-left hover:text-25" onClick={onClick}>GET A QUOTE</button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Plans
