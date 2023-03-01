import HowToRegIcon from '@mui/icons-material/HowToReg';
import StarIcon from '@mui/icons-material/Star';
const LoginInfo = ({formValues, onChange}) => {
    return(
        <div className='w-full max-w-sm'>
            <form action="" className='bg-white shadow-md px-24 pt-16 pb-10 mb-8 rounded-md bg-clip-padding
            backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200'>
                <div
                    className='grid gap-4 place-content-center
                        items-center text-center
                        hover:text-left'
                >
                    <h1 className='text-blue-700 font-bold text-xl'>
                        <HowToRegIcon/> Данные для входа
                    </h1>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-1"
                        htmlFor="Username">Логин</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={formValues.username}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-1"
                        htmlFor="Password">Пароль</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={formValues.password}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-1"
                        htmlFor="Confirm Password">Повторите пароль</label>
                    <input
                        type='password'
                        id='confirmPassword'
                        name='confirmPassword'
                        value={formValues.confirmPassword}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                </div>
                <div className="flex justify-items-center content-center items-center px-0">
                    <label className="block text-gray-700 text-sm  pr-4" htmlFor="Terms">
                        <span
                            className='text-red-700 text-justify font-extrabold text-xs text-right'>*</span> В рамках федерального закона "О персональных данных" от 27.07.2006 И 152-ФЗ и с учётом представленных данных в Анкета
                        Вы даёте свое согласие на обработку персональных данных
                    </label>
                    <input
                        id='terms'
                        name='terms'
                        value={formValues.terms}
                        onChange={onChange}
                        type='checkbox'/>
                </div>

            </form>
            {/*<p className='text-center text-gray-500 text-xs'>&copy;2023 ин-проф</p>*/}
        </div>
    )
}

export default LoginInfo