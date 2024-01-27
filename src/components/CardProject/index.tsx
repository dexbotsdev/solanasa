import Link from 'next/link';
import React from 'react';

export default function CardProject({
    name,
    logo,
    desc,
    link,
    safu = false,
    audit = false,
    kyc = false,
    doxx = false,
    rank,
    live,
    status = 0,
}: any) {

    function truncateString(desc: any, arg1: number): React.ReactNode {
        return arg1;
    }

    return (
        <Link href={link}>
            <div className="w-full p-4 rounded-xl" style={{ background: "#0c1f37" }}>
                <a className="absolute top-0 left-0 h-full w-full z-10" href="/pool/animaliaprivate">
                </a>
                <div className="space-y-6 flex flex-col justify-between card-body">
                    <div className="space-y-3">
                        <div className="flex justify-between gap-2">
                            <div>
                                <h2 className="text-xl font-semibold font-kgqj mb-4">{name}</h2>
                                <div className="flex items-center space-x-3 flex-wrap">

                                    <span className="bg-red-400 bg-opacity-80 text-gray-300 py-1 px-2 font-normal tracking-wider h-6 leading-4 uppercase badge badge-pill badge-secondary  rounded-xl">{status === 1 ? 'Live' : 'Ended'}</span>
                                    <span className="text font-bold">{safu}</span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-mainDark flex items-center justify-center">
                                    <img className="w-full" src={logo} alt={name} />
                                    <div className="absolute bg-dark1 rounded-full -bottom-1 -right-1">

                                        <div className="rounded-full bg-indigo-400 bg-opacity-70 h-7 w-7 flex items-center justify-center"  >
                                            <img src="/logo/logo-only-icon.svg" alt="Ethereum" className="h-full img-white" />
                                        </div>
                                    </div>
                                    <div className="absolute top-[-5px] right-0">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-3">
                            <ul className="flex space-x-6 flex-wrap items-center text-main  z-20 relative text-2xl">
                                <li>
                                    <a href="https://t.me/Animalia_ANIM" target="_blank" className="text-main" rel="noreferrer">
                                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/Animalia_ANIM_Channel" target="_blank" className="text-main" rel="noreferrer">
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Animalia_games" target="_blank" className="text-main" rel="noreferrer">
                                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://animalia.games/" target="_blank" className="text-main" rel="noreferrer">
                                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://whitepaper.animalia.games/" target="_blank" className="text-main" rel="noreferrer">
                                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-sm opacity-70">
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
