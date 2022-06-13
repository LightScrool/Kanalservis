import {useState} from "react";

const useFetching = (callback: () => Promise<any>): [() => void, boolean, string | null] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const callbackToReturn = (): void => {
        setIsLoading(true);
        callback()
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }

    return [callbackToReturn, isLoading, error];
}

export default useFetching;