const Enrollments = () => {
  return (
    <section className="flex flex-col items-center md:hidden bg-1 p-6 align-middle">
      <div>
        <h2 className="text-right mr-24 font-bold font-poppins text-2xl text-4">Affordable plans to Custom fit you</h2>
      </div>
      <div className="font-poppins text-2 text-2xs">
        <p className="mt-4 ml-16 font-light">
          <span className="font-bold">November 1:</span> Open Enrollment starts for health coverage for the next plan year- first day you can enroll in, renew,
          or change health plans through the Marketplace. Coverage can start as soon as January 1.
        </p>
        <p className="mt-4 ml-16 font-light">
          <span className="font-bold">December 15:</span> Last day to enroll in or change plans for coverage to start January 1.
        </p>
        <p className="mt-4 ml-16 font-light">
          <span className="font-bold">January 1:</span> Coverage starts for those who enroll in or change plans by December 15 and pay their first premium.
        </p>
        <p className="mt-4 ml-16 font-light">
          <span className="font-bold">January 15:</span> Open Enrollment ends - last day to enroll in or change health plans for the year. After this date, you
          can enroll in or change plans only if you qualify for a Special Enrollment Period.
        </p>
        <p className="mt-4 ml-16 font-light">
          <span className="font-bold">February 1:</span> Coverage starts for those who enroll in or change plans December 16 through January 16 and pay their
          first premium.
        </p>
      </div>
    </section>
  )
}

export default Enrollments
