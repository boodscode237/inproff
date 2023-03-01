import {useState} from "react";
import TeamLeaderInfos from "./RegisterTeam/TeamLeaderInfos";
import TeamInfos from "./RegisterTeam/TeamInfo";
import LoginInfo from "./RegisterTeam/LoginInfo";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ButtonComponent from "../Components/button/Button.Component";

const ParentComponent = () => {
    const formList = ['Информация о руководителе группы', 'Информация о команде', 'Данные для входа']
    const [page, setPage] = useState(0)
    const formLength = formList.length

    const initialValues = {
        leaderName: "",
        leaderLastName: "",
        leaderPatronymic: "",
        teamName: "",
        teamEmail: "",
        teamInstitution: "",
        teamCity: "",
        teamMembers: '',
        username: "",
        password: "",
        confirmPassword: "",
        terms: false,
    }

    const [values, setValues] = useState({initialValues})

    const handlePreview = () => {
        setPage(page === 0 ? formLength - 1 : page - 1)
    }
    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1)
    }
    console.log(page)

    const handleFormDisplay = () => {
        switch (page){
          case 0: {
              return <TeamLeaderInfos formValues={values} onChange={onChange}/>;
          }
          case 1: {
              return <TeamInfos formValues={values} onChange={onChange}/>;
          }
          case 2: {
              return <LoginInfo formValues={values} onChange={onChange}/>;
          }
            default:
                return null;
        }
    }

    const onChange = (event) => {
        const {name, value, type, checked} = event.target;
        setValues({...values, [name]: type === "checkbox" ? checked : value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log('form', values)
        }, 2000)
        return response
    }

    const setForm = (e) => {
        const name = e.target.innerHTML
        switch (name){
            case "О руководителе": {
                return setPage(0);
            }
            case "О команде": {
                return setPage(1);
            }
            case "Для входа": {
                return setPage(2);
            }
            default: {
                return setPage(0)
            }

        }
    }

    return(
        <div className="grid gap-4 place-content-center item-center h-screen place-items-center ">
            <div>{handleFormDisplay()}</div>
            <p className='text-center text-black-500 text-xs bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200'>&copy;2023 ин-проф</p>
            <div className='flex justify-between items-center'>
                <div className='grid grid-cols-2 place-content-center item-center'>
                    {page !== 0 && <ButtonComponent
                        handleClick={handlePreview}
                        arrow={<ArrowBackIcon/>}
                    />}
                </div>
                { page === formLength - 1 ? (
                    <div>
                    <ButtonComponent handleClick={handleSubmit} arrow={<p>Зарегистрировать вашу команду</p>}/>
                    </div>
                ) : (
                    <div>
                        <ButtonComponent handleClick={handleNext} arrow={<ArrowForwardIcon />} />
                    </div>
                ) }

            </div>

        </div>
    )
}

export default ParentComponent