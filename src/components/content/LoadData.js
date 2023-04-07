import React, { createContext, useContext, useState } from "react";

const LoadData = createContext({

    loading: false,
    setLoading: null,
});

export function LoadindProvider{ children } {

    const [loading, setLoading] = useState(false);
    const store = { loading, setLoading };

    return (

        <LoadingContext.Provider store={store}>{children}</LoadingContext.Provider>
    );
}

export function Loading() {

    const context = useContext(LoadingContext);

    if (!context) {
        console.log("Error Input");
    }

    return context;
}

