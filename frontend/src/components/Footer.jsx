const Footer = () => {
  return (
    <div className="bg-gray-100 px-[200px] h-[60vh] mt-[40px]">
      {/* UPPER PART */}
      <div className="flex justify-between py-[5%]">
        <div>
          <img src="/blisslogo1.png" alt="" height={200} width={200} />
          <p className="mt-2">
            LET'S MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold ">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="" className="hover:underline">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                {" "}
                About us
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                {" "}
                Shop
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2">123 BeautyBliss Ave, City, Country</p>

          <p className="mt-2">phone: (123) 456-7890</p>
          <p className="mt-2">Email: info@BeautyBliss.com</p>
        </div>
      </div>

      {/* LOWER PART */}
      <div className="mt-8 border-t border-[#e9acd9] pt-4 text-center">
        <p>&copy; 2025 BeautyBliss. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 2.5 12 2.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm3.5-13.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm3.5 0c-2.485 0-4.5 2.015-4.5 4.5 0 1.306.559 2.479 1.447 3.295.088.081.2.125.317.125.146 0 .288-.063.385-.174.122-.140.15-.333.073-.5-.197-.417-.302-.882-.302-1.371 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5c-.276 0-.5.224-.5.5s.224.5.5.5c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 5.924c-.813.36-1.684.603-2.598.711a4.517 4.517 0 001.984-2.486c-.867.514-1.826.888-2.847 1.09a4.503 4.503 0 00-7.673 4.106 12.78 12.78 0 01-9.292-4.71 4.501 4.501 0 001.392 6.008 4.482 4.482 0 01-2.044-.563v.057a4.504 4.504 0 003.605 4.416 4.515 4.515 0 01-2.036.077 4.506 4.506 0 004.205 3.127 9.034 9.034 0 01-5.602 1.932c-.363 0-.722-.021-1.079-.064a12.765 12.765 0 006.917 2.027c8.304 0 12.847-6.878 12.847-12.847 0-.195-.004-.39-.014-.583a9.183 9.183 0 002.252-2.343c-.825.367-1.71.614-2.63.723a4.518 4.518 0 001.979-2.495z" />
            </svg>
          </a>
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.5 0h-19A2.5 2.5 0 000 2.5v19A2.5 2.5 0 002.5 24h10.156v-8.797H9.548v-3.23h3.108V9.03c0-3.067 1.872-4.736 4.605-4.736 1.31 0 2.435.097 2.76.14v3.202l-1.897.001c-1.49 0-1.779.708-1.779 1.747v2.289h3.557l-.464 3.23h-3.093V24H21.5a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0021.5 0z" />
            </svg>
          </a>  
        </div>
      </div>
    </div>
  );
};

export default Footer;
