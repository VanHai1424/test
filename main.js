let formCount = 1;

function addForm() {
    const formsContainer = document.getElementById('formsContainer');
    const newForm = document.createElement('div');
    newForm.classList.add('form-container');
    newForm.innerHTML = `
                <label for="name-${formCount}">Tên người nhận:</label>
                <input type="text" id="name-${formCount}" placeholder="Nhập tên người nhận">
    
                <label for="amount-${formCount}">Số tiền (VNĐ):</label>
                <input type="number" id="amount-${formCount}" placeholder="Nhập số tiền">
            `;
    formsContainer.appendChild(newForm);
    formCount++;
}

function generateReceipts() {
    const receiptsContainer = document.getElementById('receiptsContainer');
    receiptsContainer.innerHTML = ''; // Xóa các phiếu thu cũ

    for (let i = 0; i < formCount; i++) {
        const name = document.getElementById(`name-${i}`).value;
        const amount = document.getElementById(`amount-${i}`).value;
        const date = new Date().toLocaleDateString();

        // Kiểm tra nếu tên hoặc số tiền bị thiếu
        if (!name || !amount) {
            alert(`Vui lòng nhập đầy đủ thông tin cho phiếu thu ${i + 1}.`);
            return;
        }

        // Tạo phiếu thu mới
        const receipt = document.createElement('div');
        receipt.classList.add('receipt');
        receipt.innerHTML = `
                    <h2>Phiếu Thu</h2>
                    <p><strong>Tên người nhận:</strong> ${name}</p>
                    <p><strong>Số tiền:</strong> ${amount} VNĐ</p>
                    <p><strong>Ngày:</strong> ${date}</p>
                `;
        receiptsContainer.appendChild(receipt);
    }

    // Hiển thị nút in sau khi tạo các phiếu thu
    const printButton = document.createElement('button');
    printButton.classList.add('print-button');
    printButton.textContent = 'In Phiếu Thu';
    printButton.onclick = function () {
        window.print();
    };
    receiptsContainer.appendChild(printButton);
}