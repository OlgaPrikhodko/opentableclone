export default function RestaurantDetails() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        {/* NAVBAR */}
        <nav className="flex justify-between bg-white p-2">
          <a href="" className="text-2xl font-bold text-gray-700">
            OpenTable
          </a>

          <div>
            <div className="flex">
              <button className="mr-3 rounded border bg-blue-400 p-2 px-4 text-white">
                SignIn
              </button>
              <button className="rounded border p-2 px-4">SignUp</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}

        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
            <h1 className="text-center text-7xl capitalize text-white drop-shadow">
              Mr White's Leicester (Mazeikiai)
            </h1>
          </div>
        </div>
        {/* HEADER */}

        {/* DESCRIPTION PORTION */}
        <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[70%] rounded bg-white p-3 shadow">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex border-b pb-2 text-reg">
              <a href="" className="mr-7">
                Overviev
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* RESTAURANT NAVBAR */}

            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="text-6xl font-bold">Mr White's Leicester</h1>
            </div>
            {/* TITLE */}

            {/* RATING */}
            <div className="flex items-end pt-2">
              <div className="ratings flex items-center">
                <p>*****</p>
                <p className="ml-3 text-reg">4.9</p>
              </div>
              <div>
                <p className="ml-4 text-reg">600 reviews</p>
              </div>
            </div>
            {/* RATING */}

            {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Marco Pierre White has returned to the capital's West End - for
                the first time in 10 years. Located in Leicester Square, Mr.
                White's is now serving succulent steaks, authentic Italian
                pizza, and Mr. White's very own London Dry Gin in their lively
                restaurant & bar.
              </p>
            </div>
            {/* DESCRIPTION */}

            {/* IMAGES */}
            <div>
              <h1 className="mt-10 mb-7 border-b pb-5 text-3xl font-bold">
                7 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/3/56612519.webp"
                  alt=""
                  className="mr-1 mb-1 h-44 w-56"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/3/47003715.webp"
                  alt=""
                  className="mr-1 mb-1 h-44 w-56"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/47003711.webp"
                  alt=""
                  className="mr-1 mb-1 h-44 w-56"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/47003713.webp"
                  alt=""
                  className="mr-1 mb-1 h-44 w-56"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/3/56612519.webp"
                  alt=""
                  className="mr-1 mb-1 h-44 w-56"
                />
              </div>
            </div>
            {/* IMAGES */}

            {/* REVIEWS */}
            <div>
              <h1 className="mt-10 mb-7 border-b pb-5 text-3xl font-bold">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="m mb-7 border-b pb-7">
                  <div className="flex">
                    <div className="flex w-1/6 flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
                        <h2 className="text-2xl text-white">MJ</h2>
                      </div>
                      <p className="mt-2 text-center">Micheal Jordan</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="mr-5 flex">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Had a lovely time celebrating my two friends 30th
                          birthdays. I arrived early to give the staff a cake
                          and candles and paid for a bottle of Prosecco. When we
                          arrived at the table, the Prosecco was there waiting.
                          The staff were great, food was delicious and our two
                          birthdays girls got a complimentary table after the
                          cake was brought out! Fabulous evening!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>

          {/* RESERVATION CARD PORTION */}
          <div className="relative w-[27%] text-reg">
            <div className="fixed w-[15%] rounded bg-white p-3 shadow">
              <div className="border-b pb-2 text-center font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select name="" id="" className="border-b py-3 font-light">
                  <option value="">1 people</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex w-[48%] flex-col">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="w-28 border-b py-3 font-light"
                  />
                </div>

                <div className="flex w-[48%] flex-col">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="border-b py-3 font-light">
                    <option value="">7:30 AM</option>
                    <option value="">9:30 AM</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <button className="h-16 w-full rounded bg-red-600 px-4 font-bold text-white">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
          {/* RESERVATION CARD PORTION */}
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
