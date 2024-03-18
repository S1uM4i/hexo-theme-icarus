const { Component, Fragment } = require('inferno');
module.exports = class extends Component {
    render() {
        const { helper } = this.props;
        const { url_for } = helper;
        return <Fragment>
            <div class="card hidden" id="apps-links-info" style="display:none">
                <div class="card-content">
                    <h2 class="tag is-primary">英灵殿</h2>
                    <div class="timeline" id="app-links"></div>
                </div>
                <noscript>请启用 JavaScript 后 <a href="/links/">再尝试重新载入此页面</a></noscript>
            </div>

            <script src={url_for('/js/get_links.js')}></script>

            <br/>
            <div class="card" id="my-links-info">
            </div>
        </Fragment>;
    }
};
