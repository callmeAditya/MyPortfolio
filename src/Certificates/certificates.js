import { getImageUrl } from "../utils";
import './certificates.scss'

const Certificates = () => {

    const arr = [
        {
            imgsrc: 'certificates/aws-certified-cloud-practitioner.png',
            content: "AWS Certified Cloud Practitioner (2025)",
            link:'https://www.credly.com/badges/c317dcf2-c5b0-4c6e-a12a-d63a045ffe59/public_url'
        }
    ]

    return (
        <>
            <section className={"certificates_container"} id="certificates">
                <h2 className={"certificates_title"}>Certificates</h2>
                <div className="certificates_content">
                    <ul className="ul_content">
                        {
                            arr.map((item, key) => (
                                <a href={item.link} target="_blank">
                                <li  key={'certificate' + (key + 1)}>
                                    <div className={'div_content'}>
                                        <h3>{item.content}</h3>
                                        <img src={getImageUrl(item.imgsrc)} />
                                    </div>
                                </li>
                                </a>
                            ))
                        }

                    </ul>

                </div>
            </section>
        </>
    )
}

export default Certificates;