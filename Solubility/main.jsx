class ReactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correct_count: 0,
            incorrect_count: 0,
            total_count: 10,
            salt: <Salt/>,
            answer_selected: null,
        };
    }
    
    render() {
        return (
            <div class="body-class" style={{width: "100%", height: "100%"}}>
                <div class="content">
                    <div id="heading-bar">
                        <h1>Solubility Quizzer</h1>
                        <div class="flex-row-baseline">
                            <h1 class="bi bi-info-circle-fill link-secondary me-3" style={{cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#infoModal"></h1>
                            <h1 class="bi bi-gear-wide-connected link-secondary" style={{cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#optionsModal"></h1>
                        </div>
                    </div>
                    <div class="mt-4 mb-4 flex-row-baseline">
                        <h5 class="text-muted me-3">
                            <span class="text-success">{this.state.correct_count}</span>
                            /
                            <span class="text-danger">{this.state.incorrect_count}</span>
                            /
                            <span class="text-muted">{this.state.total_count}</span>
                        </h5>
                        <div class="progress">
                            <div
                            class="progress-bar progress-bar-striped bg-success"
                            role="progressbar"
                            style={{width: this.state.correct_count/this.state.total_count*100 + "%"}}
                            ></div>
                            <div
                            class="progress-bar progress-bar-striped bg-danger"
                            role="progressbar"
                            style={{width: this.state.incorrect_count/this.state.total_count*100 + "%"}}
                            ></div>
                        </div>
                    </div>
                    <div class="card shadow mb-3" style={{flex: "30 2 auto"}}>
                        <div class="card-body centerer" style={{flexDirection: "column"}}>
                            <h1>{this.state.salt}</h1>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <h2 class="text-muted me-3">Correct!</h2>
                                <div class="btn btn-secondary">Next <i class="bi bi-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="btn btn-success shadow mb-3 centerer" style={{flex: "2 2 auto", position: "relative"}}>
                        <h5>Soluble</h5>
                        <h1 style={{position: "absolute", right: "15px"}} class="bi bi-check-circle-fill text-white"></h1>
                    </div>
                    <div class="btn btn-danger shadow centerer" style={{flex: "2 2 auto"}}>
                        <h5>Insoluble</h5>
                    </div>
                </div>

                {/* Info Modal */}
                <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="infoModalLabel">About this project</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>This project automatically generates ionic compounds and quizzes the user on their solubility.
                                    The user can reset their progress or change the settings of the quiz by pressing on the gear icon on the top right.</p>
                                <p>This project was built by Brandon Lee as an exercise in using <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_new">Bootstrap5</a> components and <a href="https://reactjs.org/" target="_new">ReactJS</a> to make a simple, responsive, fully front-end app.</p>
                                <hr style={{width: "25%"}}/>
                                <a href="" class="link-secondary"><i class="bi bi-github me-3"></i>Project GitHub</a><br/>
                                <a href="" class="link-secondary"><i class="bi bi-credit-card-2-front-fill me-3"></i>Brandon's Website</a>
                            </div>
                            <div class="modal-footer">
                                <span>&copy; Brandon Lee, 2021 • All rights reserved</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Options Modal */}
                <div class="modal fade" id="optionsModal" tabindex="-1" aria-labelledby="optionsModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="optionsModalLabel">Options</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="numberOfProblems" class="form-label">Number of problems:</label>
                                    <input type="number" class="form-control" id="numberOfProblems" value="10"/>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" value="Checked" id="noRepeats" checked/>
                                    <label class="form-check-label" for="noRepeats">
                                        Don't repeat problems
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" value="Checked" id="missedOnly"/>
                                    <label class="form-check-label" for="missedOnly">
                                        Only quiz me on missed problems
                                    </label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="btn btn-primary">New Quiz</div>
                                <div class="btn btn-danger">Clear Data</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
ReactDOM.render(
    <ReactApp />,
    document.getElementById('react-app')
);