export default function Brokarage() {
    return (
        <div className="container">
            <div>
                <h2 className="text-muted mb-5 mt-5">Charges for Account Opening</h2>
                
                <table  style={{ border: '1px solid grey', width: '100%', borderCollapse: 'collapse', color:"gray" }}>
                    <thead>
                        <tr>
                            <th  style={{ padding: '8px', borderBottom: '1px solid gray', textAlign: 'left' }}>Type of Account</th>
                            <th  style={{ padding: '8px', borderBottom: '1px solid  gray', textAlign: 'left' }}>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td style={{ padding: '8px' }}>Online account</td>
                            <td style={{ padding: '8px', color:"green" }}>Free</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px' }}>Offline account</td>
                            <td style={{ padding: '8px', color:"green" }}>Free</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px' }}>NRI Account(Offline)</td>
                            <td style={{ padding: '8px' }}> &#8377; 500</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px' }}>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td style={{ padding: '8px' }}>&#8377; 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
