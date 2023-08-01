const formatNumber = (count:number) => {
    const newCount = count + '';
    const length = newCount.length;
    let newNumber = '';

    for (let index = 0; index < length; index++) {
        const element = newCount[length - index - 1];
        const newIndex = index + 1;

        newNumber += element;


        if (newIndex !== length && newIndex % 3 === 0 && length > 3) newNumber += ',';
    }

    return newNumber.split('').reverse().join('');
}

export default ({icon, count, description} : {icon: any, count: number, description: string}) => {
    return (
        <>
            <div className='inline-block'>
                <div className='bg-[#5044EB] shadow-[0_13px_42px_#3B4BBF] border border-[#6770F6] p-4 rounded-[50%] w-16 h-16 flex justify-center icon-wrapper-rounded'>
                    {icon}
                </div>
            </div>
            <div className='text-2xl text-white font-bold py-4'>{formatNumber(count)}</div>
            <div className='text-white pb-4'>{description}</div>
        </>
    );
}
