const InsurancePolicyTablet = () => {
  const onClick = () => {
    alert('Redirecting to proper page...');
  }
  return (
    <section className="md:flex lg:flex-row flex-col lg:justify-center items-center hidden p-10 pb-0">
      <img src="/assets/protecting.webp" alt="People discussing with some documents on a table" className="lg:brightness-110 mb-10 w-[450px] lg:w-[400px] self-start lg:contrast-125" />
      <div className="flex flex-col items-start ml-64 lg:ml-0 px-8 py-4 w-3/4 lg:w-1/2">
        <h2 className="mb-8 pr-8 font-bold font-poppins text-3xl text-4 text-start leading-tight">Protecting people, one policy at a time.</h2>
        <p className="mr-14 mb-10 font-poppins text-6 text-xs">
          We are committed to delivering the highest standards of pro&shy;tection, tailored to meet the unique needs of each individual and family. Our
          dedicated team of professionals works tirelessly to offer comprehensive insurance solutions that not only safeguard your assets but also offer you the
          support and assistance you need in times of uncertainty.
        </p>
        <button className="bg-20 hover:bg-19 mb-10 px-16 py-2 rounded-3xl font-medium font-poppins text-2 text-sm" onClick={onClick}>LEARN MORE</button>
      </div>
    </section>
  )
}

export default InsurancePolicyTablet
