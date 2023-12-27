import { Link } from "react-router-dom"

function Footer () {
    return (
        <div className="w-full my-2 mt-10 flex flex-col items-center justify-center relative">
            <div>
                <Link to={'/terms-and-conditions'} className=" underline">Términos y Condiciones</Link>
            </div>
            <p>
                Made With 💙 by: <a href="https://x.com/crontreras1" target='_blank' className="font-bold underline hover:text-primaryColor">@crontreras1</a>
            </p>
        </div>
    )
}

export { Footer }