

const FormattedTime = ({ time }) => {
    const formatTime = millseconds => {
        let hours = Math.floor(millseconds / 3600000);
        let minutes = Math.floor((millseconds - hours * 3600000) / 60000);
        let seconds = Math.floor((millseconds - hours * 3600000 - minutes * 60000) / 1000);
        let milliseconds = millseconds - hours * 3600000 - minutes * 60000 - seconds * 1000;

        return hours.toString().padStart(2, '0') + ':' +
            minutes.toString().padStart(2, '0') + ':' +
            seconds.toString().padStart(2, '0') + '.' +
            milliseconds.toString().padStart(3, '0');
    };

    return (
        <div>
            {formatTime(time)}
        </div>
    )
}

export default FormattedTime;