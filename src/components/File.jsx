const File = ({path}) => {
    return (<>
        <div className="text-white bg-red-700 p-3 rounded-md">
            <h3>{path.split("/")[path.split("/").length - 1]}</h3>
        </div>
    </>);
}
 
export default File;