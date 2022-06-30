import { useEffect, useState } from "react";

const Useservicedetails = (serviceId) => {
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://young-hamlet-34340.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return [service]
}
export default Useservicedetails;