let select = ['학생(회)', '학과 동아리', '교내 동아리', '교내 직원', '기타'];
let text = '';
for (let i = 0; i < select.length; i++) {
    text += `<div class="form-check">
    <input class="form-check-input" type="checkbox" name="cbTeams" id="cbTeam${i - 1}" value="${i - 1}" onclick="cbTeam(this)">
    <label class="form-check-label" for="cbTeam${i - 1}">${select[i]}</label>
    </div>`;
}
document.getElementById('form-check').innerHTML = text;