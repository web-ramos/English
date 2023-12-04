
import Button from '../UI/Button/Button'
import './InputLevel.scss'
import { useForm } from "react-hook-form"


const InputLevel = () => {

    const {
        register,
        constol,
        handleSubmit
    } = useForm()

    const onLevelSubmit = (dataForm) => {
        console.log(dataForm)
    }

    return(
        <>
            <form onSubmit={handleSubmit(onLevelSubmit)}>
                <label htmlFor="LevelA">
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="A"
                        id="LevelA"
                    />
                    Level A
                </label>
                <label htmlFor="LevelB">
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="B"
                        id="LevelB"
                    />
                    Level B
                </label>
                <label htmlFor="LevelC">
                    <input
                        {...register("level")}
                        type="radio"
                        name="level"
                        value="C"
                        id="LevelC"
                    />
                    Level C
                </label>
                <Button type='submit' size='big'>
                    Enter
                </Button>
            </form>
        </>
    )

}



export default InputLevel
