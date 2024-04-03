import React from 'react'

function Techs() {
  return (
    <div className='flex justify-center content-center'>
        <div className='grid grid-rows-3 lg:border-4 lg:border-amber-500 md:border-2 md:border-amber-500'>
                <div className='flex justify-center items-center lg:bg-yellow-500 md:bg-yellow-500 '>
                    <h4 className='text-white'>TEKNİK YETENEKLER</h4>
                </div>
            <div className='grid xl:grid-cols-3 p-5 lg:grid-cols-2 md:grid-cols-2'>



            <div className='grid grid-rows-2 gap-5'>
                        <i className="fa-brands fa-html5 text-5xl mx-auto text-orange-500"></i>
                        <strong className='text-white mx-auto'>HTML5</strong>
                    </div>


                    <div className='grid grid-rows-2 gap-5'>
                    <i class="fa-brands fa-css3 text-5xl mx-auto text-blue-500"></i>
                    <strong className='text-white mx-auto'>CSS3</strong>
                    </div>

                    <div className='grid grid-rows-2 gap-5'>
                    <i class="fa-brands fa-js text-5xl mx-auto text-yellow-500"></i>
                    <strong className='text-white mx-auto'>JAVASCRİPT</strong>
                    </div>
            </div>

            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2'>

            <div className='grid grid-rows-2 gap-5'>
                    <i class="fa-brands fa-php text-5xl mx-auto text-blue-700"></i>
                    <strong className='text-white mx-auto'>PHP</strong>
                    </div>


                    <div className='grid grid-rows-2 gap-5'>
                    <i class="fa-brands fa-laravel text-5xl mx-auto text-red-600"></i>
                    <strong className='text-white mx-auto'>LARAVEL</strong>
                    </div>

                    <div className='grid grid-rows-2 gap-5'>
                    <i class="fa-brands fa-react text-5xl mx-auto text-blue-500"></i>
                    <strong className='text-white mx-auto'>REACT</strong>
                    </div>
            </div>


            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2'>

            <div className='grid grid-rows-2 gap-5'>
                    <i class="fa-brands fa-python text-5xl mx-auto text-yellow-500"></i>
                    <strong className='text-white mx-auto'>PYTHON</strong>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default Techs
