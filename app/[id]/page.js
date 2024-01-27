
export default function DynamicPage({params})  {
    const {id} = params;
    console.log(id);
    return (
        <div>
            This is  : {id}
        </div>
    )
}
