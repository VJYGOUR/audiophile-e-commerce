import EarphoneLink from "../FirstPage/EarphoneLink"
import EarphonePhoto from "../FirstPage/EarphonePhoto"

function EarphoneFirstPage({data}) {
    return (
        <section className="flex flex-col gap-2 mb-20 md:w-[95%] md:ml-[auto]  md:mr-[auto] md:gap-4 md:flex-row">
            <EarphonePhoto data={data}/>
            <EarphoneLink data={data}/>

        </section>
    )
}

export default EarphoneFirstPage
