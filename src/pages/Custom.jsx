import React from 'react'

const Test = () => {
    return (
        <>
            <div id='container-custom' className='container' style={{ minHeight: '300px' }}>
                <div className='border-1px' style={{ backgroundColor: '#c7d2fe' }}>
                    <div className='row'>
                        <div
                            className='col-4 border-1px'>
                        </div>
                        <div
                            className='col-4 border-1px'>
                        </div>
                        <div
                            className='col-4 border-1px'>
                        </div>
                   </div>
                   
                </div>
            </div>

            
            <div id='container-custom' className='container' style={{ minHeight: '300px' }}>
                <div className='border-1px' style={{ backgroundColor: '#c7d2fe' }}>
                    <div className="row">
                        <div className="col-8 border-1px"></div>
                        <div className="col-4 border-1px"></div>
                    </div>

                    <div className="row">
                        <div className="col-2 border-1px"></div>
                        <div className="col-6 border-1px"></div>
                        <div className="col-4 border-1px"></div>
                    </div>

                    <div className="row">
                        <div className="col-4 border-1px"></div>
                        <div className="col-4 border-1px"></div>
                        <div className="col-4 border-1px"></div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Test