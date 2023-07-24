import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
    return (
        <>
            <div className="flex justify-end p-4">
                <div className="bg-black w-10 h-10 p-2 rounded-md text-center hover:bg-[#5044EB]">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fcfcfc",}} />
                </div>
            </div>
        </>
    )
}
