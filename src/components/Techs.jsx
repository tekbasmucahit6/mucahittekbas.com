import React from 'react'

function Techs() {
  return (
    <div className='flex justify-center content-center'>
        <div className='grid'>
                <div className='flex justify-center items-center'>
                    <h4 className='text-white font-semibold border-b-2 p-4'>TEKNİK YETENEKLER</h4>
                </div>


            <div className='grid xl:grid-cols-3 p-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5'>



                      <div className='grid grid-rows-2 gap-5 border-r-2 border-b-2 p-2 shadow-xl'>
                        <i className="fa-brands fa-html5 text-5xl mx-auto text-orange-500"></i>
                        <strong className='text-white mx-auto'>HTML5</strong>
                      </div>


                    <div className='grid grid-rows-2 gap-5  border-r-2 border-b-2 p-2 shadow-xl'>
                      <i class="fa-brands fa-css3 text-5xl mx-auto text-blue-500"></i>
                      <strong className='text-white mx-auto'>CSS3</strong>
                    </div>

                    <div className='grid grid-rows-2 gap-5  border-r-2 border-b-2 p-2 shadow-xl'>
                      <i class="fa-brands fa-js text-5xl mx-auto text-yellow-500"></i>
                      <strong className='text-white mx-auto'>JAVASCRİPT</strong>
                    </div>
            

           

                    <div className='grid grid-rows-2 gap-5  border-r-2 border-b-2 p-2 shadow-xl'>
                      <i class="fa-brands fa-php text-5xl mx-auto text-blue-700"></i>
                      <strong className='text-white mx-auto'>PHP</strong>
                    </div>


                    <div className='grid grid-rows-2 gap-5  border-r-2 border-b-2 p-2 shadow-xl'>
                      <i class="fa-brands fa-laravel text-5xl mx-auto text-red-600"></i>
                      <strong className='text-white mx-auto'>LARAVEL</strong>
                    </div>

                    <div className='grid grid-rows-2 gap-5  border-r-2 border-b-2 p-2 shadow-xl'>
                      <i class="fa-brands fa-react text-5xl mx-auto text-blue-500"></i>
                      <strong className='text-white mx-auto'>REACT</strong>
                    </div>
            



                    <div className='grid grid-rows-2 gap-5  border-r-2 border-b-2 p-2 shadow-xl'>
                      <i class="fa-brands fa-python text-5xl mx-auto text-yellow-500"></i>
                      <strong className='text-white mx-auto'>PYTHON</strong>
                    </div>
          </div>

          </div>
          </div>

       

    
  )
}

export default Techs
