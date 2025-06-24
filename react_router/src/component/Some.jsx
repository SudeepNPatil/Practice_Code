import React from "react";
import { useParams } from "react-router-dom";

export default function Some() {

    const params = useParams();

    console.log(params)

    return (
        <div>
            some somem {params.someid}
        </div>
    )
}