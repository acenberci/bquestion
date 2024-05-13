import React from 'react'
import Navbar from '../Components/navbar';
import { PlayCircleIcon,CheckIcon } from '@heroicons/react/24/outline'
import Slider from '../Components/slider';
function MainPage() {
    return (
        <>
            <Navbar>
            </Navbar>
            <div className='firstSection bg-BBackground max-md:py-10 max-md:px-3 py-28 px-28'>
                <div className="grid grid-cols-12 gap-4">
                    <div className=' col-span-8 flex flex-col justify-center max-lg:col-span-12 max-lg:text-center max-lg:py-8'>
                        <h1 className=' text-6xl font-bold max-lg:text-4xl'>Collectible Sneakers</h1>
                        <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa sed tempore earum sapiente nisi, illum corporis aliquam nesciunt odio debitis voluptatibus deserunt sunt modi inventore tempora rerum? Laudantium, ipsa.</p>
                        <div className='flex max-lg:justify-center'>
                            <button className='px-5 py-3 border-2 rounded-lg text-Borange border-Borange font-medium hover:text-hoverBorange hover:border-hoverBorange'>Sign up now</button>
                            <button className='px-5 py-3 text-Borange border-Borange font-medium flex items-center hover:text-hoverBorange hover:border-hoverBorange'><PlayCircleIcon className=' size-8'></PlayCircleIcon> Watch Demo</button>
                        </div>
                    </div>
                    <div className=' col-span-4  flex justify-center max-lg:col-span-12'>
                        <div className='border-yellow-400 border-2 rounded-3xl bg-yellow-400 scale-[80%]'>
                            <img className=' scale-[125%]' src={require("../Assets/Images/Sneaker.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-28 py-32">
                    <div className=' max-lg:col-span-3 max-lg:text-center'>
                        <div className='flex items-center max-lg:justify-center'>
                        <img src={require("../Assets/Icons/sectionOneIcon.png")} className=' py-1 w-1/5' alt="" />
                        </div>
                        <h3 className=' font-semibold text-xl py-1 max-lg:text-2xl'>Nibh viverra</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum in a quo nihil consectetur facere rem iusto officia odio impedit.</p>
                    </div>
                    <div className=' max-lg:col-span-3 max-lg:text-center '>
                        <div className='flex items-center max-lg:justify-center'>
                        <img src={require("../Assets/Icons/sectionOneIcon.png")} className=' py-1 w-1/5' alt="" />
                        </div>
                        <h3 className=' font-semibold text-xl py-1 max-lg:text-2xl'>Nibh viverra</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum in a quo nihil consectetur facere rem iusto officia odio impedit.</p>
                    </div><div className=' max-lg:col-span-3 max-lg:text-center'>
                        <div className='flex items-center max-lg:justify-center'>
                        <img src={require("../Assets/Icons/sectionOneIcon.png")} className=' py-1 w-1/5' alt="" />
                        </div>
                        <h3 className=' font-semibold text-xl py-1 max-lg:text-2xl'>Nibh viverra</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum in a quo nihil consectetur facere rem iusto officia odio impedit.</p>
                    </div>
                </div>
            </div>
            <div className="secondSection bg-BSecondBackground max-md:py-10 max-md:px-3 py-28 px-28">
                <div className='text-white flex w-full justify-between items-center max-lg:justify-normal max-lg:flex-col'>
                    <h2 className='font-bold text-4xl'>The best of the best</h2>
                    <button className='px-5 py-3 border-2 rounded-lg border-white font-medium max-lg:mt-5 hover:text-slate-300 hover:border-slate-300 hover:shadow-BShadowColor hover:shadow-lg'>Sign up now</button>
                </div>
                <div className='grid grid-cols-3 gap-10 pt-10'>
                    <div className='rounded-lg shadow-lg bg-slate-950 text-white border-white shadow-BShadowColor overflow-hidden max-lg:col-span-3'>
                        <div className=" aspect-video overflow-hidden flex justify-center items-center"><img src={require("../Assets/Images/card1.jpg")} className=' w-full' alt="" /></div>
                        <div className="p-7 flex flex-col min-h-64">
                            <h4 className='font-semibold text-2xl'>Title</h4>
                            <p className='my-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium quisquam exercitationem. Commodi, blanditiis aliquam?</p>
                            <button className='px-5 py-3 border-2 rounded-lg border-white font-medium w-full mt-auto hover:text-slate-300 hover:border-slate-300 hover:shadow-BShadowColor hover:shadow-lg'>Sign up now</button>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-lg bg-slate-950 text-white border-white shadow-BShadowColor overflow-hidden max-lg:col-span-3'>
                        <div className=" aspect-video overflow-hidden flex justify-center items-center"><img src={require("../Assets/Images/card2.jpg")} className=' w-full' alt="" /></div>
                        <div className="p-7 flex flex-col min-h-64">
                            <h4 className='font-semibold text-2xl'>Title</h4>
                            <p className='my-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium quisquam exercitationem. Commodi, blanditiis aliquam?</p>
                            <button className='px-5 py-3 border-2 rounded-lg border-white font-medium w-full mt-auto hover:text-slate-300 hover:border-slate-300 hover:shadow-BShadowColor hover:shadow-lg'>Sign up now</button>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-lg bg-slate-950 text-white border-white shadow-BShadowColor overflow-hidden max-lg:col-span-3'>
                        <div className=" aspect-video overflow-hidden flex justify-center items-center"><img src={require("../Assets/Images/card3.jpg")} className=' w-full' alt="" /></div>
                        <div className="p-7 flex flex-col min-h-64">
                            <h4 className='font-semibold text-2xl'>Title</h4>
                            <p className='my-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laudantium quisquam exercitationem. Commodi, blanditiis aliquam?</p>
                            <button className='px-5 py-3 border-2 rounded-lg border-white font-medium w-full mt-auto hover:text-slate-300 hover:border-slate-300 hover:shadow-BShadowColor hover:shadow-lg'>Sign up now</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="thirdSection bg-BThirdBackground max-md:py-10 max-md:px-3 py-28 px-28">
                <div className="w-full rounded-3xl shadow-sm shadow-[#0000005e] bg-white">
                    <div className="grid grid-cols-2 p-14">
                        <div className='flex flex-col justify-center max-lg:col-span-2 max-lg:text-center z-10'>
                            <h2 className=' font-bold text-5xl pb-5'>Why Join Us</h2>
                            <p className='pb-1 flex'><CheckIcon color='green' className='size-8'></CheckIcon> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, est..</p>
                            <p className='pb-1 flex'><CheckIcon color='green' className='size-8'></CheckIcon> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, est..</p>
                            <p className='pb-5 flex'><CheckIcon color='green' className='size-8'></CheckIcon> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, est..</p>
                            <div className='flex max-lg:self-center'>
                            <button className='px-5 py-3 border-2 rounded-lg text-Borange border-Borange font-medium w-fit hover:text-hoverBorange hover:border-hoverBorange'>Sign up now</button>
                            </div>
                        </div>
                        <div className=' relative max-lg:col-span-2 max-lg:py-10'>
                            <div className='absolute -z-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full opacity-80 scale-110'>
                                <img src={require("../Assets/Images/Untitled-1.png")} alt="" />
                            </div>
                            <div className="scale-75 bg-BThirdBackground border-8 overflow-hidden border-BThirdBackground shadow-sm shadow-black rounded-3xl">
                                <div className='flex py-2'>
                                    <img className='pr-1' src={require("../Assets/Icons/redCircle.png")} alt="" />
                                    <img className='px-1' src={require("../Assets/Icons/yellowCircle.png")} alt="" />
                                    <img className='px-1' src={require("../Assets/Icons/greenCircle.png")} alt="" />
                                </div>
                                <img src={require("../Assets/Images/card4.jpg")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="forthSection bg-BThirdBackground pb-28 max-md:py-10 max-lg:text-center">
                <h2 className=' text-4xl font-bold max-md:px-3 py-20 px-28 z-50'>Because they love us</h2>
                <div className=' relative'>
                    <div className=' absolute w-11/12 h-full bg-[#fde68a] -z-0 -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2'></div>
                    <Slider></Slider>
                </div>
            </div>
            <div className="fifthSection bg-BThirdBackground max-md:py-10 max-md:px-3 pb-32 px-28">
                <div className='max-lg:text-center'>
                    <h2 className=' font-bold text-4xl'>
                        Grow your collection
                    </h2>
                    <p className='py-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perspiciatis id nulla quasi vitae quod distinctio accusantium at labore dolorum? Laudantium maiores nostrum quas nihil modi natus accusantium atque excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloremque officiis temporibus eaque autem, consequuntur laudantium. Odit sint corporis repellendus assumenda maiores ipsa dicta sequi? Iure eius inventore vero est.
                    </p>
                </div>
                <div className='grid grid-cols-4'>
                    <div className=' col-span-1 max-lg:col-span-4'>
                        <div className="hiddenScrollbar lg:grid lg:grid-rows-6 gap-6 max-lg:flex max-lg:overflow-x-auto max-lg:whitespace-nowrap max-lg:py-10">
                            <div className="selection active">★ Bibendum tellus</div>
                            <div className="selection">★ Cras eget</div>
                            <div className="selection">★ Lorem, ipsum dolor.</div>
                            <div className="selection">★ Amet Fringilla.</div>
                            <div className="selection">★ Amet nibh</div>
                            <div className="selection">★ Sed Velit</div>
                        </div>
                    </div>
                    <div className="col-span-3 relative mb-48 max-lg:col-span-4">
                        <div className=" bg-BThirdBackground border-8 overflow-hidden max-lg:border-4 max-lg:rounded-md border-BThirdBackground shadow-sm shadow-black rounded-3xl absolute -translate-x-1/2  left-[45%] w-[50%]">
                            <div className='flex py-2 max-lg:py-0'>
                                <img className='pr-1' src={require("../Assets/Icons/redCircle.png")} alt="" />
                                <img className='px-1' src={require("../Assets/Icons/yellowCircle.png")} alt="" />
                                <img className='px-1' src={require("../Assets/Icons/greenCircle.png")} alt="" />
                            </div>
                            <img src={require("../Assets/Images/card4.jpg")} alt="" />
                        </div>
                        <div className=" bg-BThirdBackground border-8 overflow-hidden max-lg:border-4 max-lg:rounded-md border-BThirdBackground shadow-sm shadow-black rounded-3xl absolute -translate-x-1/2 top-[20%] max-lg:top-8 left-[55%] w-[50%]">
                            <div className='flex py-2 max-lg:py-0'>
                                <img className=' max-lg: pr-1' src={require("../Assets/Icons/redCircle.png")} alt="" />
                                <img className='px-1' src={require("../Assets/Icons/yellowCircle.png")} alt="" />
                                <img className='px-1' src={require("../Assets/Icons/greenCircle.png")} alt="" />
                            </div>
                            <img src={require("../Assets/Images/card4.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lastSection max-md:py-10 max-md:px-3 py-28 px-28 relative'>
                <div className=' text-center'>
                    <h2 className=' font-semibold text-9xl text-[#fffbeb] max-lg:text-7xl max-md:text-5xl'>11,658,467</h2>
                    <h2 className=' font-semibold text-9xl text-[#fffbeb] max-lg:text-7xl max-md:text-5xl'>Shoes Collected</h2>
                </div>
            </div>
            <footer className='footer max-lg:pb-5 max-lg:pt-10 max-lg:px-3 py-28 px-28 max-lg:text-center max-lg:justify-center'>
                <div className="grid grid-cols-4 text-white">
                    <div className='grid grid-rows-6 gap-4 max-lg:col-span-4 max-lg:py-8'>
                        <div>
                            <p className=" hover:text-slate-400">Product</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Pricing</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Overview</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Browse</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Accessibility</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Five</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-6 gap-4 max-lg:col-span-4 max-lg:py-8'>
                        <div>
                            <p className=" hover:text-slate-400">Solutions</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Brainstorming</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Ideation</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Wireframing</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Research</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Design</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-6 gap-4 max-lg:col-span-4 max-lg:py-8'>
                        <div>
                            <p className=" hover:text-slate-400">Product</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Pricing</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Overview</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Browse</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Accessibility</p>
                        </div>
                        <div>
                            <p className=" hover:text-slate-400">Five</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-12 gap-4 max-lg:col-span-4 max-lg:pt-8'>
                        <div className="row-span-2">Get the App</div>
                        <div className="row-span-3 max-lg:flex max-lg:justify-center">
                            <img src={require("../Assets/Icons/AS.png")} className=' h-full'  alt="" />
                        </div>
                        <div className="row-span-3 max-lg:flex max-lg:justify-center">
                        <img src={require("../Assets/Icons/GP.png")} className=' h-full' alt="" />
                        </div>
                        <div className="row-span-2">Follow Us</div>
                        <div className="row-span-2 flex max-lg:justify-center">
                            <a href="#">
                                <CheckIcon className="size-8"></CheckIcon>
                            </a><a href="#">
                                <CheckIcon className="size-8"></CheckIcon>
                            </a><a href="#">
                                <CheckIcon className="size-8"></CheckIcon>
                            </a><a href="#">
                                <CheckIcon className="size-8"></CheckIcon>
                            </a><a href="#">
                                <CheckIcon className="size-8"></CheckIcon>
                            </a><a href="#">
                                <CheckIcon className="size-8"></CheckIcon>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className=' my-5' />
                <div className='flex justify-between text-white font-semibold max-lg:justify-normal max-lg:flex-col max-lg:text-center'>
                    <div className=''><h2>Collers @2023. All rights reserved.</h2></div>
                    <div className='flex gap-4 max-lg:justify-center max-lg:py-8'>
                        <a href="#" className='hover:text-slate-400'>Terms</a><a href="#" className='hover:text-slate-400'>Privacy</a><a href="#" className='hover:text-slate-400'>Contact</a><a href="#" className='hover:text-slate-400'>@EN</a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default MainPage