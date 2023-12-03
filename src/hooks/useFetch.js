import { isLoadingPage } from '../store/appSlice'
import { useDispatch } from 'react-redux'

export const useFetch = (callback) => {
    const dispatch = useDispatch();
    const setIsLoadingPage = (state) => dispatch(isLoadingPage(state));

    const fetching = async (...args) => {
        try {
            setIsLoadingPage(true);
            await callback(...args);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoadingPage(false);
        }
    }

    return fetching;
}