import * as React from 'react';

interface IProps {
    plays: any
}
export const PlayByPlayComponent: React.StatelessComponent<IProps> = (props) => {
    const { plays } = props;

    return (
        <table className="table table-dark table-striped table-bordered" id="play-by-play">
            <thead>
                <tr>
                    <th scope="col">Play-By-Play</th>
                </tr>
            </thead>
            <tbody id="play-by-play-table-body">
                {
                    plays.map((play: any) => (
                        <tr key={play.pbp[0].events[0].id} id="play-by-play-row">
                            <td>{play.pbp[0].events[0].description}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}