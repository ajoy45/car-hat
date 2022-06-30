import { useEffect, useState } from "react";

const useService = () => {
    const [servicess, setServicess] = useState([]);

    useEffect(() => {
        fetch("https://young-hamlet-34340.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServicess(data))
    }, []);
    return [servicess, setServicess]
};
export default useService;