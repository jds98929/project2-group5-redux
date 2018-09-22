import * as React from 'react';

interface IProps {
    plays: any
}
export const PlayByPlayComponent: React.StatelessComponent<IProps> = (props) => {
    const { plays } = props;

    return (
        <table className="table table-dark table-striped table-condensed" id="play-by-play">
            <thead>
                <tr>
                    <th scope="col">Play-By-Play</th>
                </tr>
            </thead>
            <tbody id="play-by-play-table-body">
                {
                    plays.map((play: any) => (
                        <tr id="play-by-play-row">
                            <td>{play}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}