function MainBanner() {
  return (
    <div className="flex items-center justify-center p-10 bg-yellow-400 border-2 border-black ">
      <div className="px-10 space-y-3">
        <h1 className="max-w-xl font-serif text-4xl">
          <span className="underline decoration-black">Medium</span> is used to
          read, write and connect
        </h1>
        <h4>Its Free and easy to read and post the articles on any topics</h4>
      </div>

      <img
        className="hidden h-32 sm:block md:h-40 "
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="miduem logo"
      />
    </div>
  )
}

export default MainBanner
